import { withStyles } from '@bit/mui-org.material-ui.styles'
import MuiTooltip, { TooltipProps } from '@bit/mui-org.material-ui.tooltip'

export function Tooltip(props: TooltipProps) {
  return (
    <StyledTooltip arrow {...props}>
      {props.children}
    </StyledTooltip>
  )
}

export const StyledTooltip = withStyles(theme => ({
  tooltip: {
    position: 'relative',
    backgroundColor: theme.palette.common.black,
    fontSize: '11px',
    padding: '10px',
  },
  popper: arrowGenerator(theme.palette.common.black),
  tooltipPlacementLeft: {
    margin: '0 8px',
  },
  tooltipPlacementRight: {
    margin: '0 8px',
  },
  tooltipPlacementTop: {
    margin: '8px 0',
  },
  tooltipPlacementBottom: {
    margin: '8px 0',
  },
}))(MuiTooltip)

function arrowGenerator(color: string) {
  return {
    '&[x-placement*="bottom"] .MuiTooltip-arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] .MuiTooltip-arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '2em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] .MuiTooltip-arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] .MuiTooltip-arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '2em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  }
}
