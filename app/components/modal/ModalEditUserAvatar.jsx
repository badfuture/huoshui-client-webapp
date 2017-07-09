import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Grid, Container, Segment } from 'semantic-ui-react'
import Cropper from 'react-cropper'
import Dropzone from 'react-dropzone'

function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString
  if (dataURI.split(',')[0].indexOf('base64') >= 0) { byteString = atob(dataURI.split(',')[1]) } else { byteString = unescape(dataURI.split(',')[1]) }

    // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new Blob([ia], { type: mimeString })
}


export default class ModalEditUserAvatar extends Component {
  constructor() {
    super()
    this.state = {
      avatarSrc: '/images/sample/sample3.jpg',
      croppedFile: null,
    }
  }

  onDrop(files) {
    const selectedFile = files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      this.setState({
        avatarSrc: event.target.result,
      })
    }
    reader.readAsDataURL(selectedFile)
  }

  onSubmit() {
    const canvas = this.refs.cropper.getCroppedCanvas()
    const dataURL = canvas.toDataURL('image/jpeg', 1.0)
    const file = dataURItoBlob(dataURL)
    const formData = new FormData()
    formData.append('avatar', file, 'avatar')
    this.props.uploadAvatar(formData)
  }

  render() {
    const { trigger, isVisible, onClose } = this.props
    return (
      <Modal
        trigger={trigger} closeIcon="close" closeOnDimmerClick={false} open={isVisible} onClose={onClose}
      >
        <Header icon="user outline" content="修改我的头像" />
        <Modal.Content>
          <Segment loading={this.props.isAvatarUploading}>
            <Grid padded="vertically" stackable divided centered>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Cropper
                    ref="cropper"
                    src={this.state.avatarSrc}
                    style={{ height: 'auto', width: '100%' }}
                    aspectRatio={5 / 5}
                    preview=".avatar-preview"
                    guides
                    zoomable={false}
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header size="small" content="效果预览" />
                  <div className="avatar-preview" style={{ width: '100%', height: '15em', overflow: 'hidden' }} />
                  <Header size="small" content="上传自定义头像" />
                  <Dropzone
                    style={{
                      width: '200px',
                      height: '100px',
                      borderWidth: '2px',
                      borderColor: 'rgb(102, 102, 102)',
                      borderStyle: 'dashed',
                      borderRadius: '5px',
                    }}
                    onDrop={this.onDrop.bind(this)}
                  >
                    <Grid verticalAlign="middle" style={{ height: '100%', marginTop: '0em' }}>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="center">
                            <Icon name="add circle" size="large" />
                          </Container>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Dropzone>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="blue"
            onClick={this.onSubmit.bind(this)}
          >
            <Icon name="checkmark" /> 保存
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
