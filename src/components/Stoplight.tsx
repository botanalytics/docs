import React from "react";
import { API } from "@stoplight/elements";
import styles from "./Stoplight.module.scss";
//import RunInPostmanButton from './RunInPostmanButton';

interface StoplightProps {
  apiDescriptionUrl: string;
}

export function Stoplight({ apiDescriptionUrl }: StoplightProps) {
  return (
    <div className={(styles as { stoplight: string }).stoplight}>
      <API 
        className="stacked"
        apiDescriptionUrl={apiDescriptionUrl}
        router="hash" 
        layout="sidebar"
        hideExport
      />
    </div>
  );
}

export default Stoplight;
