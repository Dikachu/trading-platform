import type { Transaction } from "@/types/types";



export const exportToCSV = (
  data: Transaction[],
  filename: string = "transactions",
) => {
  if (data.length === 0) {
    alert("No data to export");
    return;
  }

  // Define CSV headers
  const headers = [
    "TXID",
    "Created (DD/MM)",
    "Address",
    "Amount",
    "Commission",
    "Type",
    "Status",
  ];

  // Convert data to CSV rows
  const csvRows = [
    headers.join(","), // Header row
    ...data.map((transaction) =>
      [
        `"${transaction.txid}"`,
        transaction.created,
        `"${transaction.address}"`,
        transaction.amount,
        transaction.commission,
        transaction.type,
        transaction.status,
      ].join(","),
    ),
  ];

  // Create CSV string
  const csvString = csvRows.join("\n");

  // Create blob and download
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${filename}_${new Date().toISOString().split("T")[0]}.csv`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToJSON = (
  data: Transaction[],
  filename: string = "transactions",
) => {
  if (data.length === 0) {
    alert("No data to export");
    return;
  }

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `${filename}_${new Date().toISOString().split("T")[0]}.json`,
  );
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};