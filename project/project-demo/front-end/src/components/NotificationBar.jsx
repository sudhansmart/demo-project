import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function NotificationBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="notify-container">
      <div className="button-container">
        <h5 style={{ color: "red", paddingRight: "20px" }}>
          You Have New Notifications!!
        </h5>
        <Button onClick={() => setOpen(!open)}>View</Button>
      </div>
      <Collapse in={open}>
        <div
          className={`notification-content ${open ? 'slide-down' : ''}`}
          style={{ width: '100%', overflow: 'hidden' }}
        >
          <div className="scrolling-text">
            About Notification Here... About Notification Here...
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default NotificationBar;
