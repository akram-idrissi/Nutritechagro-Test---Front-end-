import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CategoryWrapper from './category-wrapper';

import { getCategoryProducts } from './api';


export default async function CategoryListing({ params, searchParams }) {
  
  const category = params.name;
  const initialPage = parseInt(searchParams.page) || 1;

  const data = await getCategoryProducts(category, initialPage);  

  return (
    <div className="bg-white">
      <Navbar sticky={true} />
      <CategoryWrapper data={data} category={category} />   
      <Footer />
    </div>
  )
}