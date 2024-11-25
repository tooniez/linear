import csv from "csvtojson";
import { Importer, ImportResult, IssuePriority } from "../../types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const j2m = require("jira2md");

type AsanaPriority = "High" | "Med" | "Low";

interface AsanaIssueType {
  "Task ID": string;
  "Created At": string;
  "Completed At": string;
  "Last Modified": string;
  Name: string;
  Assignee: string;
  "Assignee Email": string;
  "Start Date": string;
  "Due Date": string;
  Tags: string;
  Notes: string;
  Projects: string;
  "Parent Task": string;
  Priority: AsanaPriority;
}

/**
 * Import issues from an Asana CSV export.
 *
 * @param filePath  path to csv file
 * @param orgSlug   base Asana project url
 */
export class AsanaCsvImporter implements Importer {
  public constructor(filePath: string, orgSlug: string) {
    this.filePath = filePath;
    this.organizationName = orgSlug;
  }

  public get name(): string {
    return "Asana (CSV)";
  }

  public get defaultTeamName(): string {
    return "Asana";
  }

  public import = async (): Promise<ImportResult> => {
    const data = (await csv().fromFile(this.filePath)) as AsanaIssueType[];

    const importData: ImportResult = {
      issues: [],
      labels: {},
      users: {},
      statuses: {},
    };

    const assignees = Array.from(new Set(data.map(row => row.Assignee)));

    for (const user of assignees) {
      importData.users[user] = {
        name: user,
      };
    }

    for (const row of data) {
      const title = row.Name;
      if (!title) {
        continue;
      }

      const url = this.organizationName ? `${this.organizationName}${row["Task ID"]}` : undefined;
      const mdDesc = j2m.to_markdown(row.Notes);
      const description = url ? `${mdDesc}\n\n[View original issue in Asana](${url})` : mdDesc;

      const priority = mapPriority(row.Priority);

      const dueDate = row["Due Date"] ? new Date(row["Due Date"]) : undefined;

      const tags = row.Tags.split(",");

      const assigneeId = row.Assignee && row.Assignee.length > 0 ? row.Assignee : undefined;

      const status = !!row["Completed At"] ? "Done" : "Todo";

      const labels = tags.filter(tag => !!tag);

      const createdAt = row["Created At"] ? new Date(row["Created At"]) : undefined;

      const completedAt = row["Completed At"] ? new Date(row["Completed At"]) : undefined;

      importData.issues.push({
        title,
        description,
        status,
        priority,
        url,
        assigneeId,
        labels,
        dueDate,
        createdAt,
        completedAt,
      });

      for (const lab of labels) {
        if (!importData.labels[lab]) {
          importData.labels[lab] = {
            name: lab,
          };
        }
      }
    }

    return importData;
  };

  // -- Private interface

  private filePath: string;
  private organizationName?: string;
}

const mapPriority = (input: AsanaPriority) => {
  const priorityMap: { [k: string]: IssuePriority } = {
    High: 2,
    Med: 3,
    Low: 4,
  };
  return priorityMap[input] || 0;
};
