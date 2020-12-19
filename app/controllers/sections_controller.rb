class SectionsController < ApplicationController
  def index
    render json: Section.all
  end

  def show
  end

  def create
  end

  def update
    section = Section.find(params[:id])
    if section.update(section_params)
      render json: section
    else
      render json: { errors: section.errors }, status: :unprocessable_entity  
    end
  end

  def destroy
  end

  private

  def section_params 
    params.require(:section).permit(:name)
  end
end
