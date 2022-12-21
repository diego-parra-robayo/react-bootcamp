function ProductDetailSpecsSection({ specs }) {
  return (
    <div>
      <div>Specs:</div>
      <ul>
        {specs?.map((spec) => (
          <li key={spec.spec_name}>
            {spec.spec_name}: {spec.spec_value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDetailSpecsSection;
