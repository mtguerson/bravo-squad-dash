import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface HeaderSelectProps {
  Icon: React.ElementType;
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
  item: {
    value: string;
    label: string;
  }[];
  className?: string;
}

export function HeaderSelect({
  Icon,
  item,
  onValueChange,
  value,
  className,
}: HeaderSelectProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={cn('w-[140px] h-8', className)}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {item.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
