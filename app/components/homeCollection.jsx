import {ProductCard} from '~/components';
import ProductList from '~/components/ProductList';


const mockProducts = new Array(16).fill('');

export default function HomeCollection({
  title = 'Home Collection',
  products = mockProducts,
  count = 16,
  ...props
}) {
  return (
    <section className="home-collection page-component shop" heading={title} {...props}>

      <div className="grid-changer">

        {/* Cross Hair */}
        <div className="crosshair">
          <img src="/crosshair.svg" alt="Grid View" />
        </div>

        {/* Pagination */}
        <div className="pagination">
          01-all
        </div>
        
      </div>

      {/* GRID */}
      <div className="wrapper">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>

    </section>
  );
}
