import React, { useState, useEffect } from 'react';
import ModalBase from '../../../../components/templates/ModalBase/index';
import { useTranslations } from 'next-intl';
import { PostCategory } from '@/models/interface/categories/PostCategory';
import PostCategoryService from '../../../../services/umgService/collabAdmin/categories/postCategoryService';
import { notification } from 'antd';

interface Props {
    onClose: () => void;
    fetchPostCategory: () => void;
    currentCategory: PostCategory | null; // Cambié el nombre a 'currentCategory' para hacer que coincida con tu uso anterior
}

const EditPostCategoryModal: React.FC<Props> = ({ onClose, fetchPostCategory, currentCategory }) => {
    const t = useTranslations('general');
    const [descripcion, setDescripcion] = useState('');
    const [alias, setAlias] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const postCategoryService = new PostCategoryService();

    // Este hook actualiza los campos cuando se recibe un nuevo currentCategory
    useEffect(() => {
        if (currentCategory) {
            setDescripcion(currentCategory.descripcion);
            setAlias(currentCategory.alias);
        }
    }, [currentCategory]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const updatedCategory = {
                descripcion,
                alias,
            };

            await postCategoryService.updatePostCategory(currentCategory?.id_detalle, updatedCategory);
            notification.success({
                message: 'Categoría actualizada',
                description: 'La categoría ha sido actualizada exitosamente',
            });

            fetchPostCategory(); // Actualiza la lista de categorías
            onClose(); // Cierra el modal
        } catch (error) {
            notification.error({
                message: 'Error al actualizar categoría',
                description: 'Ocurrió un error al intentar actualizar la categoría. Inténtalo de nuevo.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ModalBase onClose={onClose} title={t('edit_details')} width={800} className="bg-white rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                        Descripción
                    </label>
                    <input
                        id="descripcion"
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-50"
                        placeholder="Ingresa la nueva descripción de la categoría"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="alias" className="block text-sm font-medium text-gray-700">
                        Alias
                    </label>
                    <input
                        id="alias"
                        type="text"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-50"
                        placeholder="Ingresa el nuevo alias de la categoría"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring focus:ring-opacity-50 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Guardando...' : 'Guardar'}
                    </button>
                </div>
            </form>
        </ModalBase>
    );
};

export default EditPostCategoryModal;
