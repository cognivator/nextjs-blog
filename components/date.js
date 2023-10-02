/**
 * Created by slhenty on 2023-10-1.
 */
import {format, parseISO} from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyy')}</time>
}
