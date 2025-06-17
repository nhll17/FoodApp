import Items from "./item"
export default function Itemlist({food,loading}){
    return (
      <div>
        {loading ? (
          <p>Loading..</p>
        ) : (
          food?.extendedIngredients?.map((item) => (
            <div>
              <Items item={item} />
            </div>
          ))
        )}
        
      </div>
    );
}