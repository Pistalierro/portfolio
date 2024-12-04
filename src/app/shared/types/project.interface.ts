export interface ProjectInterface {
  id: string;
  name: string;
  description: string;
  images: {
    small: string;
    large: string;
  };
  link: string;
  technologies: string[];
  tools: string[];
  blockStates: { [key: number]: 'hidden' | 'visible' };
}
