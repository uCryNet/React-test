import React, {PureComponent} from 'react'

export default class AboutUs extends PureComponent {
  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <br/>
        <p>
          Это мой пет-проект - магазин по продажи суши и роллов.
        </p>
        <p>
          Над стилями, как вы могли понять, я сильно не заморачивался.
        </p>
        <h2>Связь со мной:</h2>
        <br/>
        <p><b>Github:</b> ucrynet</p>
        <p><b>E-mail:</b> ucrynet@gmail.com</p>
      </div>
    )
  }
}
