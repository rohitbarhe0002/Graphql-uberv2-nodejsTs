import { AuthChecker } from "type-graphql";
import Context from "../types/context";

const authChecker: AuthChecker<Context> = ({ context }) => {
  console.log(context.user,">>>>usr")
  return !!context.user;
};

export default authChecker;
