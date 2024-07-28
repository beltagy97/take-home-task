import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../../../shared/fetcher/axios";
import { DeriveEmailResponse, FormDataType } from "../types";

export const useDeriveEmail = () => {
    const { mutateAsync, data, error, isPending } = useMutation({
        mutationFn: async ({name, domain}: FormDataType) => {
            return await axiosClient.post<DeriveEmailResponse>(`/derive-email`,{name, domain});
        },
    });
    return { mutateAsync, data, error, isPending };
};

