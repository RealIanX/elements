import { gridStyle } from "../../../theme"
import { FilterFlowNodes } from "../helpers/filter-flow-nodes"
import { hasTotp } from "../helpers/utils"
import { SettingsFlow } from "@ory/client"
import { JSX } from "react"

export type TOTPSettingsProps = {
  flow: SettingsFlow
}

export const TOTPSettingsSection = ({
  flow,
}: TOTPSettingsProps): JSX.Element | null => {
  const filter = {
    nodes: flow.ui.nodes,
    groups: "totp",
    withoutDefaultGroup: true,
  }

  return hasTotp(flow.ui.nodes) ? (
    <div className={gridStyle({ gap: 32 })}>
      <FilterFlowNodes
        filter={{ ...filter, excludeAttributes: "submit,button" }}
      />
      <FilterFlowNodes
        filter={{ ...filter, attributes: "submit,button" }}
        buttonOverrideProps={{ fullWidth: false }}
      />
    </div>
  ) : null
}
