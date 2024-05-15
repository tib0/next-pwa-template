import { db, itemTable } from "@/db/database.config";
import { IItem } from "@/db/types/item";
import { NextPageWithLayout } from "../_app";
import { JSXElementConstructor, ReactElement, useCallback } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { getLayout } from "@/lib/homeLayout";

const Items: NextPageWithLayout = () => {
  const itemsList = useLiveQuery(() => db.items.toArray());

  const updateItem = async (i: IItem) => {
    const item: IItem = {
      id: i.id,
      name: i.name + "-updated",
      cat: Number(i.cat),
    };
    try {
      const id = await itemTable.put(item);
      console.info(`An item was updated ${id}`);
    } catch (error) {
      console.error(`Failed to update ${i.id}: ${error}`);
    }
  };

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
        flex flex-col items-center
        justify-center
        gap-3
      `}
    >
      <h1 className="font-bold">Create item</h1>
      <form
        onSubmit={createItem}
        className={`
          flex flex-col items-center
          justify-center gap-2
        `}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="shadow-xl input input-bordered py-0.5 input-md text-base w-full"
        />
        <label htmlFor="cat">Cat:</label>
        <input
          type="number"
          id="cat"
          name="cat"
          className="shadow-xl input input-bordered py-0.5 input-md text-base w-full"
        />
        <button className="btn btn-primary shadow-lg btn-sm" type="submit">
          Create
        </button>
      </form>
      {itemsList && itemsList?.length > 0 && (
        <div className="overflow-x-auto pt-2 rounded-xl shadow-xl">
          <table className="table backdrop-blur-lg bg-opacity-30 bg-base-100">
            <thead>
              <tr>
                <th></th>
                <th className="w-44">Name</th>
                <th className="w-16">Cat</th>
                <th className="w-16">Action</th>
              </tr>
            </thead>
            <tbody>
              {itemsList &&
                itemsList.map((i: IItem) => (
                  <tr key={i.id + "-item-row"}>
                    <th>{i.id}</th>
                    <td>{i.name}</td>
                    <td>{i.cat}</td>
                    <td
                      className={`
                        flex flex-col items-center
                        justify-center
                        gap-3
                      `}
                    >
                      <div
                        className="btn btn-xs btn-primary shadow-md"
                        onClick={() => deleteItem(i.id)}
                      >
                        Delete
                      </div>
                      <div
                        className="btn btn-xs btn-primary shadow-md"
                        onClick={() => updateItem(i)}
                      >
                        Update
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

Items.getLayout = (page: ReactElement<any, string | JSXElementConstructor<any>>) =>
  getLayout(page, "Items");

export default Items;
