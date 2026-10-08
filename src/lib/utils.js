/**
 * Utility functions
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
  });
}
