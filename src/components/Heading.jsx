import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Heading() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="heading">
            <p>Welcome <b>{user.name}</b></p>
            <p>
                <a href="#" onClick={() => { setUser(null) }}>Click here to log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select>
                <option value="light">Light blue</option>
                <option value="dark">Dark green</option>
            </select>
            <hr/>
        </div>
    );
}