import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { SearchIcon } from '@components/icons/search-icon';
import { CloseIcon } from '@components/icons/close-icon';
import { useTranslation } from 'next-i18next';
import GroupsDropdownMenu from '@framework/groups/dropdown-menu';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  variant?: 'minimal' | 'normal' | 'with-shadow';
  onSubmit: (e: any) => void;
  onClearSearch: (e: any) => void;
}

const classes = {
  normal:
    'bg-light px-2',
  minimal:
    'bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light',
  'with-shadow': 'bg-light ps-10 pe-12 md:ps-14 focus:bg-light ',
};

const SearchBox: React.FC<Props> = ({
  className,
  label,
  onSubmit,
  onClearSearch,
  variant = 'normal',
  value,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} className={cn('w-full', className)}>
      <div
        className={cn('rounded md:rounded-md flex items-center relative bg-light px-2 py-1', {
          'h-14 shadow-900': variant === 'normal',
          'h-11 md:h-12': variant === 'minimal',
          'h-16 shadow-downfall': variant === 'with-shadow',
        })}
      >
        <label htmlFor={label} className="sr-only">
          {label}
        </label>

        <GroupsDropdownMenu variant="minimal" />
        <input
          id={label}
          type="text"
          value={value}
          autoComplete="off"
          className={cn(
            'w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-md focus:outline-none focus:ring-0',
            classes[variant]
          )}
          {...rest}
        />
        
          <button
            type="button"
            onClick={onClearSearch}
            className={cn(
              'cursor-pointer h-full w-10 md:w-14 flex items-center justify-center text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover',
              {
                'end-36': variant === 'normal',
                'end-0 absolute': variant !== 'normal',
                'opacity-0': !value,
                'opacity-100': value,
              }
            )}
          >
            <span className="sr-only">{t('common:text-close')}</span>
            <CloseIcon className="w-3.5 h-3.5 md:w-3 md:h-3" />
          </button>

        {variant === 'normal' ? (
          <button className="w-6/12 h-5/6 min-w-max px-8 flex items-center  justify-center rounded-md bg-accent text-light font-normal transition-colors duration-200 focus:outline-none hover:bg-accent-hover focus:bg-accent-hover">
            {/* <SearchIcon className="w-4 h-4 me-2.5" /> */}
            {t('common:text-search', { cars: '7,274' })}
          </button>
        ) : (
          <button className="h-full w-10 md:w-14 flex items-center justify-center absolute start-0 text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover">
            <span className="sr-only">{t('common:text-search')}</span>
            <SearchIcon className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBox;
