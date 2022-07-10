import { useNavigate, useParams } from 'react-router-dom';
import { useMemo } from 'react';

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath) {
        navigate(path);
      },
    };
  }, [navigate]);
}

export function usePathRouter() {
  const params = useParams();

  return useMemo(() => {
    return {
      path: params.handbook,
    };
  }, [params]);
}

type RoutePath = string;
