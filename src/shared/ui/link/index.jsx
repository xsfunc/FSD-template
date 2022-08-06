import React from 'react'
import { Link as JoyLink } from '@mui/joy'
import { Link as RouteLink } from 'atomic-router-react'

export const LinkForwarded = React.forwardRef(function LinkForwardRef(props, ref) {
  return <RouteLink innerRef={ref} {...props} />
})

export const Link = ({ props }) => <JoyLink component={LinkForwarded} {...props} />
