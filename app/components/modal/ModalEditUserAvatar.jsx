import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Grid, Container } from 'semantic-ui-react'
import Cropper from 'react-cropper'
import Dropzone from 'react-dropzone'

export default class ModalEditUserAvatar extends Component {
  constructor() {
    super()
    this.state = {
      files: [],
      avatarSrc: '/images/dept/full/art.jpeg',
    }
  }

  _crop() {
    // image in dataUrl
    // console.log(this.refs.cropper.getCroppedCanvas().toDataURL())
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

  render() {
    return (
      <Modal trigger={this.props.trigger} closeIcon="close" closeOnDimmerClick={false}>
        <Header icon="user outline" content="修改我的头像" />
        <Modal.Content>
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
                  crop={this._crop.bind(this)}
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

        </Modal.Content>
        <Modal.Actions>
          <Button color="blue">
            <Icon name="checkmark" /> 保存
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
