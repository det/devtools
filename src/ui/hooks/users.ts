import { gql, useMutation, useQuery } from "@apollo/client";
import { getUserId } from "ui/utils/useToken";
import { Invitation } from "./invitations";

export const GET_USER_ID = gql`
  query GetUserId {
    viewer {
      user {
        id
      }
    }
  }
`;

export function useGetUserId() {
  const { data, loading, error } = useQuery(GET_USER_ID);
  return { userId: data?.viewer?.user.id, loading, error };
}

export type UserInfo = {
  email: string;
  internal: boolean;
  loading: boolean;
  nags: Nag[];
};

export enum Nag {
  FIRST_REPLAY = "first_replay",
}

export function useGetUserInfo() {
  const { data, loading, error } = useQuery(
    gql`
      query GetUser {
        viewer {
          email
          internal
          nags
        }
      }
    `
  );

  if (error) {
    console.error("Apollo error while fetching user:", error);
  }

  const email: string = data?.viewer?.email;
  const internal: boolean = data?.viewer?.internal;
  const nags: Nag[] = data?.viewer?.nags;

  return { loading, email, internal, nags };
}

export function useUpdateUserNags() {
  const [updateUserNags, { error }] = useMutation(
    gql`
      mutation UpdateUserNags($newNags: [String!]!) {
        updateUserNags(input: { nags: $newNags }) {
          success
        }
      }
    `,
    { refetchQueries: ["GetUser"] }
  );

  if (error) {
    console.error("Apollo error while updating the user's nags:", error);
  }

  return updateUserNags;
}
