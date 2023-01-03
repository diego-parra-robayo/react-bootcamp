import IconBadge from "../../ui/base-components/IconBadge";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../../core/routes";
import { selectCartItemsQty } from "../../redux/cart/selectors";

function ShoppingCartIcon() {
  const navigate = useNavigate();
  const cartItemsQty = useSelector(selectCartItemsQty);
  return (
    <IconBadge
      iconName={"shopping_cart"}
      badge={cartItemsQty > 0 ? cartItemsQty : null}
      onClick={() => {
        navigate(routes.cart);
      }}
    />
  );
}

export default ShoppingCartIcon;
