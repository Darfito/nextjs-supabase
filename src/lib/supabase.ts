// you must usingg the same packages for using client if you are using a middlleware, otherwise the session method didnt work
import { createClientComponentClient} from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient()

