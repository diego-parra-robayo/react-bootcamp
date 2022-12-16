import CategoriesSidePanel from "./CategoriesSidePanel";
import ProductList from "../products/ProductList";
import PaginationControls from "./PaginationControls";
import Spacer from "../../components/Spacer";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../products/productsSlice";
import { selectCategoriesWithFilterState } from "../categories/extraCategoriesSelectors";
import { toggleCategoryFilter } from "../products/productsThunks";

function ProductListPage() {
  const categories = useSelector(selectCategoriesWithFilterState);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <main>
      <CategoriesSidePanel
        categories={categories}
        onCategorySelected={(category) =>
          dispatch(toggleCategoryFilter(category.id))
        }
      />
      <section>
        <ProductList products={products} />
        <Spacer height={"2rem"} />
        <PaginationControls
          pageFrom={products.length === 0 ? 0 : 1}
          pageTo={5}
        />
      </section>
    </main>
  );
}

export default ProductListPage;
