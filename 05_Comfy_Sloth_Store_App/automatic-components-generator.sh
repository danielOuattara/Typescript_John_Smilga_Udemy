mkdir -p features/cart features/theme features/user && touch features/cart/cartSlice.ts features/theme/themeSlice.ts features/user/userSlice.ts



mkdir -p pages && touch pages/{About,Cart,Checkout,Error,HomeLayout,Landing,Login,Orders,Products,Register,SingleProduct,index}.tsx && for file in pages/*.tsx; do echo "export default function $(basename "$file" .tsx)() {
  return <h1 className=\"text-4xl\">$(basename "$file" .tsx) Page</h1>;
}" > "$file"; done