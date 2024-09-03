import { SECOND_ARTICLE_IMAGE_ONE, SECOND_ARTICLE_IMAGE_THREE, SECOND_ARTICLE_IMAGE_TWO } from '../../../../lib/config';
import CommonBlogSection from '../commonBlogSection/commonBlogSection';



const BlogThirdSection = () => {

    const mostReadArticles = [
        {
            title:"Use Cases and Future of Artificial Intelligence (AI) in Crypto",
            imageUrl: SECOND_ARTICLE_IMAGE_ONE,
        },
        {
        
            title: 'Top Artificial Intelligence (AI) Coins in 2024',
            imageUrl: SECOND_ARTICLE_IMAGE_TWO,
         
        },
         {
        
            title: 'All About Artificial General Intelligence (AGI): Will AI Think Like Humans?',
            imageUrl: SECOND_ARTICLE_IMAGE_THREE,
         
        },
    ];


  return (
    
    <div className='px-3 md:px-0'>
        <CommonBlogSection
          title="Artificial Intelligence"
          blogDetails ={mostReadArticles}
        />
    </div>
  )
}

export default BlogThirdSection