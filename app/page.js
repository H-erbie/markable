import ContainerComps from '@/components/container-comps';
import NewsFeed from '@/components/news-feed'
export default function Home() {
  return (
   <div className='pt-28 flex gap-x-3 bg-gray-100 px-5 sm:px-8'>
<NewsFeed/>
 <div className='hidden w-[30%] lg:block'>
<ContainerComps/></div>
   </div>
    );
}
