import React from 'react';

const postmanUrl = "https://god.gw.postman.com/run-collection/23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23965665-167c8511-a61f-4ceb-88bf-bedfbf10d226%26entityType%3Dcollection%26workspaceId%3Db14a14fd-1a0b-4fb3-8730-02214bec0158"

export default function RunInPostmanButton() {
  return (
    <a
      href={postmanUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Run in Postman"
    >
      <img
        src="https://run.pstmn.io/button.svg"
        alt="Run in Postman"
        width={128}
        height={32}
      />
    </a>
  );
}