
export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[]; style: 'bullet' | 'check' | 'cross' | 'number' }
  | { type: 'highlight'; title?: string; text: string; icon?: string; variant: 'gold' | 'green' | 'red' | 'dark' }
  | { type: 'heading'; text: string; level: 2 | 3 }
  | { type: 'quote'; text: string; author?: string };

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  coverImage?: string; // Optional chapter cover concept
  content: ContentBlock[];
}

export interface EbookData {
  title: string;
  subtitle: string;
  intro: Chapter;
  chapters: Chapter[];
  conclusion: Chapter;
}

export type ViewState = 'landing' | 'login' | 'reader';
