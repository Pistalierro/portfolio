export interface SkillInterface {
  id: string;
  name: string;
  description: string;
  icon: string;
  blockStates: { [key: number]: 'hidden' | 'visible' };
}
