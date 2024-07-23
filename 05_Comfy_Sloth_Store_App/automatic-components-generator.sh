mkdir -p src/features/cart src/features/theme src/features/user && touch src/features/cart/cartSlice.ts src/features/theme/themeSlice.ts src/features/user/userSlice.ts


mkdir -p src/pages && \
touch src/pages/{about,cart,checkout,error,home,landing,login,orders,products,register,single-product,index}.tsx && \
for file in src/pages/*.tsx; do \
  base_name=$(basename "$file" .tsx); \
  capitalized_name=$(echo "$base_name" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}'); \
  echo "export default function $capitalized_name() { 
  return <h1 className=\"text-4xl\">$capitalized_name Page</h1>; 
}" > "$file"; \
done
 
# Note: correct index.tsx as follow 

echo 'export { default as HomeLayout } from "./home";
export { default as Landing } from "./landing";
export { default as SingleProduct } from "./single-product";
export { default as Products } from "./products";
export { default as Cart } from "./cart";
export { default as Error } from "./error";
export { default as About } from "./about";
export { default as Login } from "./login";
export { default as Register } from "./register";
export { default as Checkout } from "./checkout";
export { default as Orders } from "./orders";' > src/pages/index.tsx


# create components: Navbar, Logo, LinksDropdown, NavLinks, ModeToggle, CartButton

touch src/components/{Navbar,Logo,LinksDropdown,NavLinks,ModeToggle,CartButton}.tsx && 
for file in src/components/*.tsx; do echo "export default function $(basename "$file" .tsx)() {
  return <h2 className=\"text-4xl\">$(basename "$file" .tsx)</h2>;
}" > "$file"; done

# update src/components/index.tsx

echo '
export {default as Header} from "./Header";
export {default as Navbar} from "./Navbar";
export {default as Logo} from "./Logo";
export {default as LinksDropdown} from "./LinksDropdown";
export {default as NavLinks} from "./NavLinks";
export {default as ModeToggle} from "./ModeToggle";
export {default as CartButton} from "./CartButton";
' > src/components/index.tsx


:'  
Hero,HeroCarousel,FeaturedProducts,SectionTitle,ProductsGrid
'

mkdir  -p src/components && touch src/components/{Hero,HeroCarousel,FeaturedProducts,SectionTitle,ProductsGrid}.tsx && 
for file in src/components/*.tsx; do echo "export default function $(basename "$file" .tsx)() {
  return <h2 className=\"text-4xl\">$(basename "$file" .tsx)</h2>;
}" > "$file"; done
