import Image from 'next/image';

export const Logo = (props: any) => {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/assets/logo.png"
                alt="PP Diniz"
                width={32}
                height={32}
                className="object-contain"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    );
};
