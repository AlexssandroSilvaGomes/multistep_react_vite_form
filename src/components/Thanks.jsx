import {BsEmojiHeartEyesFill, BsEmojiSmileFill, BsEmojiNeutralFill, BsEmojiFrownFill} from 'react-icons/bs'

import './Thanks.css'

const Thanks = ({data}) => {
  const emojiData = {
    unsatisfied: <BsEmojiFrownFill />,
    neutral: <BsEmojiNeutralFill />,
    satisfied: <BsEmojiSmileFill />,
    very_satisfied: <BsEmojiHeartEyesFill />,
  }

  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>Sua opinião é muito importante, em breve você receberá um cupom com 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks