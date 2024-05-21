import { db, itemTable } from "@/db/database.config";
import { IItem } from "@/db/types/item";
import { NextPageWithLayout } from "../_app";
import { ReactElement, useCallback, useState } from "react";
import HomeLayout from "@/layout/home";
import Head from "next/head";
import { useLiveQuery } from "dexie-react-hooks";

const Add: NextPageWithLayout = () => {
  const [items, setItems] = useState({ name: "", cat: "", id: null });
  const itemsList = useLiveQuery(() => db.items.toArray());

  const updateItem = useCallback(async () => {
    if (items?.id && items?.name && items?.cat) {
      await db.items.put({
        id: items?.id,
        name: items?.name,
        cat: Number(items?.cat),
      });
      setItems({ name: "", cat: "", id: null });
    }
  }, [items]);

  const deleteItem = useCallback(async (id: any) => {
    await db.items.delete(id);
  }, []);

  const createItem = async (event: any) => {
    event.preventDefault();
    const item: IItem = {
      name: event.target.name.value,
      cat: Number(event.target.cat.value),
    };
    try {
      const id = await itemTable.add(item);
      console.info(`A new item was created with id ${id}`);
      event.target.reset();
    } catch (error) {
      console.error(`Failed to add ${item}: ${error}`);
    }
  };
  return (
    <div
      className={`
        pt-16 sm:pt-16 
        p-2 sm:p-4 
        flex flex-col items-center
        justify-center
        gap-3
      `}
    >
      <h1>Create item</h1>
      <form
        onSubmit={createItem}
        className={`
          flex flex-col items-center
          justify-center gap-2
        `}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="cat">Cat:</label>
        <input type="number" id="cat" name="cat" />
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="table backdrop-blur-lg bg-opacity-30 bg-base-100">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {itemsList && itemsList.map((i) => (<tr key={i.id + '-item-row'}>
              <th>{i.id}</th>
              <td>{i.name}</td>
              <td>{i.cat}</td>
              <td>
                <div 
                  className="btn btn-xs btn-primary" 
                  onClick={() => deleteItem(i.id)}
                >
                  Delete
                </div>
                <div 
                  className="btn btn-xs btn-primary" 
                  onClick={() => deleteItem(i.id)}
                >
                  Delete
                </div>
              </td>
            </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Add.getLayout = function getLayout(page: ReactElement) {
  return (
    <HomeLayout>
      <Head>
        <title>{"Add item - " + process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      {page}
    </HomeLayout>
  );
};

export default Add;
