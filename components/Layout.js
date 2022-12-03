import NavBar from "./NavBar";
import { Table } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <NavBar/>
      <div className="flex justify-center h-150 ">
      <main className="flex justify-center items-center">{children}</main>
      </div>
    </>
  )
}