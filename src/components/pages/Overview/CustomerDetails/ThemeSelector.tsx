import React from "react";
import { Theme } from "static/theme";

interface Props {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

const ThemeSelector = (props: Props) => {
  const {theme, onChange} = props;
  // groendakmonitor is the default
  const renderOption = (which: Theme) => <option selected={which === theme || (which === "groendakmonitor" && !theme)}>{which}</option>;
  return (
    <select className="form-control" onChange={(e) => onChange(e.currentTarget.value as Theme)}>
      {renderOption("groendakmonitor")}
      {renderOption("zinco")}
    </select>
  )
}

export default ThemeSelector;
