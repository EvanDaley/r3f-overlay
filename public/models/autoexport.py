# This is a custom blender plugin I wrote to auto-export to GLB. Its pretty shitty, but gets the job done.

import shutil
import os
import bpy
bl_info = {
    "name": "AutoGLTF",
    "blender": (2, 80, 0),
    "category": "Object",
}


# bpy.ops.wm.save_mainfile()


class ObjectAutoExportGltf(bpy.types.Operator):
    """My Object Exporting Script"""      # Use this as a tooltip for menu items and buttons.
    bl_idname = "object.autoexport"        # Unique identifier for buttons and menu items to reference.
    bl_label = "Export to GLTF"         # Display name in the interface.
    bl_options = {'REGISTER', 'UNDO'}  # Enable undo for the operator.

    # execute() is called when running the operator.
    def execute(self, context):
        # The original script
        # scene = context.scene
        # filepath = os.path.join(export_path, name)
        # filepath = bpy.path.ensure_ext(filepath, ".x3d")

        # bpy.ops.export_scene.gltf(

        # )
        # for obj in scene.objects:
        # obj.location.x += 1.0

        # Lets Blender know the operator finished successfully.
        return {'FINISHED'}


def menu_func(self, context):
    self.layout.operator(ObjectAutoExportGltf.bl_idname)


def my_save_handler(scene):
    path = bpy.data.filepath
    saveto = path.split('.')[0] + '.glb'
    print('saveto')
    print(saveto)
    bpy.ops.export_scene.gltf(
        filepath=saveto,
        export_format='GLB',
        ui_tab='GENERAL',
        export_copyright='',
        export_image_format='AUTO',
        export_texture_dir='',
        export_texcoords=True,
        export_normals=True,
        export_draco_mesh_compression_enable=False,
        export_draco_mesh_compression_level=6,
        export_draco_position_quantization=14,
        export_draco_normal_quantization=10,
        export_draco_texcoord_quantization=12,
        export_draco_color_quantization=10,
        export_draco_generic_quantization=12,
        export_tangents=False,
        export_materials='EXPORT',
        export_colors=True,
        use_mesh_edges=False,
        use_mesh_vertices=False,
        export_cameras=False,
        export_selected=False,
        use_selection=False,
        use_visible=False,
        use_renderable=False,
        use_active_collection=False,
        export_extras=False,
        export_yup=True,
        export_apply=False,
        export_animations=True,
        export_frame_range=True,
        export_frame_step=1,
        export_force_sampling=True,
        export_nla_strips=True,
        export_def_bones=False,
        export_current_frame=False,
        export_skins=True,
        export_all_influences=False,
        export_morph=True,
        export_morph_normal=True,
        export_morph_tangent=False,
        export_lights=False,
        export_displacement=False,
        will_save_settings=False,
        filter_glob='*.glb;*.gltf'
    )


def register():
    bpy.utils.register_class(ObjectAutoExportGltf)
    # Adds the new operator to an existing menu.
    bpy.types.VIEW3D_MT_object.append(menu_func)
    bpy.app.handlers.save_post.append(my_save_handler)


def unregister():
    # Removes the new operator from an existing menu.
    bpy.types.VIEW3D_MT_object.remove(menu_func)
    bpy.utils.unregister_class(ObjectAutoExportGltf)


# This allows you to run the script directly from Blender's Text editor
# to test the add-on without having to install it.
if __name__ == "__main__":
    register()