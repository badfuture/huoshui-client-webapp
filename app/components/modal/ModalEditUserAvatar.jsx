import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Grid, Container, Segment } from 'semantic-ui-react'
import Cropper from 'react-cropper'
import Dropzone from 'react-dropzone'

export default class ModalEditUserAvatar extends Component {
  constructor() {
    super()
    this.state = {
      avatarSrc: '',
      croppedFile: null,
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onDrop = (files) => {
    const selectedFile = files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      this.setState({
        avatarSrc: event.target.result,
      })
    }
    reader.readAsDataURL(selectedFile)
  }

  onSubmit = () => {
    const canvas = this.cropper.getCroppedCanvas()
    const dataURL = canvas.toDataURL('image/jpeg', 1.0)
    this.props.uploadAvatar(dataURL)
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        avatarSrc: this.props.user.avatar,
      })
    }, 10)
  }

  render() {
    const { isVisible, onClose } = this.props

    return (
      <Modal
        closeIcon="close"
        closeOnDimmerClick={false}
        open={isVisible}
        onClose={onClose}
      >
        <Header icon="user outline" content="修改我的头像" />
        <Modal.Content>
          <Segment loading={this.props.isAvatarUploading}>
            <Grid padded="vertically" stackable divided centered>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Cropper
                    ref={(c) => { this.cropper = c }}
                    src={this.state.avatarSrc}
                    style={{ height: 400, width: '100%' }}
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
                      height: '115px',
                      borderWidth: '2px',
                      borderColor: 'rgb(102, 102, 102)',
                      borderStyle: 'dashed',
                      borderRadius: '5px',
                    }}
                    accept="image/jpeg, image/png"
                    onDrop={this.onDrop}
                  >
                    <Grid verticalAlign="middle" style={{ height: '100%', marginTop: '0em' }}>
                      <Grid.Row>
                        <Grid.Column>
                          <Container textAlign="center" style={{ color: 'grey' }}>
                            <Icon name="add circle" size="large" /><br />
                            <div style={{ fontSize: '0.25em', marginTop: '0.55em' }}>
                              支持JPG、PNG<br />
                              大小不超过5M
                            </div>
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
            onClick={this.onSubmit}
          >
            <Icon name="checkmark" /> 保存
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
