import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/shared/components/ui/dialog';

interface Props {
  title: string;
}

const SecondPage: React.FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const onOpenChange = () => setOpen(prev => !prev);

  return (
    <>
      <div>
        <h1>{props.title}</h1>
        <Link to="/">Return to home</Link>
        <Button onClick={onOpenChange}>Open</Button>
      </div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SecondPage;
