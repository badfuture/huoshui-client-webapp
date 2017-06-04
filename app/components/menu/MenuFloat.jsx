import React from 'react'
import { Menu, Icon, Popup, Image } from 'semantic-ui-react'
import styles from './styles/MenuFloat.scss'

const contentDownload = (
  <div>
    <Image src="../../images/barcode.jpg" size="small" />
  </div>
)

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
      <Icon name="edit" color="grey" />
    </Menu.Item>
    <Menu.Item
      name="download mobile client"
      style={{ minWidth: '3em' }}
    >
      <Popup
        trigger={<Icon name="tablet" color="grey" />}
        on="hover"
        content={contentDownload}
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
      <Icon name="question circle outline" color="grey" />
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
