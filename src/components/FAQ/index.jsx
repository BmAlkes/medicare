
import {faqs} from '../../assets/data/faq'
import FaqItems from './FaqItems'

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
        {faqs.map((faq,index) =><FaqItems faq={faq} index={index} key={index}/>)}
    </ul>
  )
}

export default FaqList