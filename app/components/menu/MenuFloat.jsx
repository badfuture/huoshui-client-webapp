import React from 'react'
import { Menu, Icon, Popup } from 'semantic-ui-react'
import styles from './styles/MenuFloat.scss'

let timeOut
const scrollTop = () => {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -50)
    timeOut = setTimeout(scrollTop, 15)
  } else clearTimeout(timeOut)
}

const MenuFloat = props => (
  <Menu compact icon="labeled" vertical className={styles.menuFloat}>
    <Menu.Item
      name="create new review"
      style={{ minWidth: '3em' }}
      onClick={() => {
        props.openAddReviewModal()
      }}
    >
      <Popup
        trigger={<Icon name="edit" color="grey" />}
        on="hover"
        content={'新的点评'}
        offset={7}
        position="left center"
      />
    </Menu.Item>
    <Menu.Item
      name="download mobile client"
      style={{ minWidth: '3em' }}
    >
      <Popup
        trigger={<Icon name="tablet" color="grey" />}
        on="hover"
        content={'下载客户端'}
        offset={7}
        position="left center"
      />
    </Menu.Item>

    <Menu.Item
      name="feedback"
      style={{ minWidth: '3em' }}
      onClick={() => {
        const url = '/feedback'
        const win = window.open(url, '_blank')
        win.focus()
      }}
    >
      <Popup
        trigger={<Icon name="question circle outline" color="grey" />}
        on="hover"
        content={'问题反馈'}
        offset={7}
        position="left center"
      />
    </Menu.Item>

    <Menu.Item
      name="scroll to top"
      style={{ minWidth: '3em' }}
      onClick={scrollTop}
    >
      <Icon name="angle double up" color="grey" />
    </Menu.Item>
  </Menu>
)

export default MenuFloat
