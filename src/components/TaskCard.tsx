import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit3, Trash2, Calendar, AlertCircle } from 'lucide-react';
import { format } from 'date-fns';

export interface Task {
  id: string;
  title: string;
  description?: string;
  due_date?: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Done';
  created_at: string;
}

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
  onStatusChange: (taskId: string, newStatus: Task['status']) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onStatusChange }) => {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'High':
        return 'bg-destructive text-destructive-foreground';
      case 'Medium':
        return 'bg-warning text-warning-foreground';
      case 'Low':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'Done':
        return 'bg-success text-success-foreground';
      case 'In Progress':
        return 'bg-primary text-primary-foreground';
      case 'To Do':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const isOverdue = () => {
    if (!task.due_date) return false;
    const today = new Date();
    const dueDate = new Date(task.due_date);
    return dueDate < today && task.status !== 'Done';
  };

  const handleStatusClick = () => {
    const statusOrder: Task['status'][] = ['To Do', 'In Progress', 'Done'];
    const currentIndex = statusOrder.indexOf(task.status);
    const nextIndex = (currentIndex + 1) % statusOrder.length;
    onStatusChange(task.id, statusOrder[nextIndex]);
  };

  return (
    <Card className={`border-border hover:shadow-md transition-all ${task.status === 'Done' ? 'opacity-75' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-semibold text-foreground leading-tight ${task.status === 'Done' ? 'line-through' : ''}`}>
            {task.title}
          </h3>
          <div className="flex gap-1 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={() => onEdit(task)}>
              <Edit3 className="h-3 w-3" />
            </Button>
            <Button variant="outline" size="sm" onClick={() => onDelete(task.id)}>
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge 
            className={`cursor-pointer ${getStatusColor(task.status)}`}
            onClick={handleStatusClick}
          >
            {task.status}
          </Badge>
          <Badge className={getPriorityColor(task.priority)}>
            {task.priority}
          </Badge>
        </div>
      </CardHeader>

      {(task.description || task.due_date) && (
        <CardContent className="pt-0">
          {task.description && (
            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
              {task.description}
            </p>
          )}
          
          {task.due_date && (
            <div className={`flex items-center gap-2 text-sm ${isOverdue() ? 'text-destructive' : 'text-muted-foreground'}`}>
              {isOverdue() ? (
                <AlertCircle className="h-4 w-4" />
              ) : (
                <Calendar className="h-4 w-4" />
              )}
              <span>
                Due {format(new Date(task.due_date), 'MMM d, yyyy')}
                {isOverdue() && ' (Overdue)'}
              </span>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default TaskCard;