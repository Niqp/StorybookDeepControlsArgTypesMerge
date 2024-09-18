import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    deepControls: {
      enabled: true,
    }
  },
  tags: ['autodocs'],
  argTypes: {
    "options.primary": { description: 'Primary button' },
  },
};

export const Primary = {
  args: {
    options: {
      primary: true,
      backgroundColor: '#ff6600',
      size: 'medium',
      label: 'Button',
    }
  },
};

