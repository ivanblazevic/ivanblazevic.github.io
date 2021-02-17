export interface OpenSourceItem {
  link: string;
  title: string;
  package?: string;
  description?: string;
  count?: number;
  img?: string;
  dateCreated?: string;
}

export interface OpenSourceItemProps {
  item: OpenSourceItem;
}
