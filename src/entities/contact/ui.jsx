import { Avatar, ListItem, ListItemContent, ListItemDecorator, Typography } from '@mui/joy'

export function ContactItem({ name, address }) {
  return (
    <ListItem>
      <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
        <Avatar src='/static/images/avatar/1.jpg' />
      </ListItemDecorator>
      <ListItemContent>
        <Typography>{name}</Typography>
        <Typography level='body2' noWrap>
          {address}
        </Typography>
      </ListItemContent>
    </ListItem>
  )
}
