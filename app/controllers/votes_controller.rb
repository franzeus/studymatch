class VotesController < ApplicationController

  def index
  end

  def new
    @vote = new_vote
  end

  def create
    voted = current_user ? current_user.votes.create(normalized_params[:vote]) : Vote.create(normalized_params[:vote])
    
    if voted.correct?
      flash[:notice] = "You're right!"
    else
      flash[:alert] = "Wrong!"
    end

    @vote = new_vote
    render :new
  end

  private
  def new_vote
    current_user ? current_user.votes.new : Vote.new
  end

  def normalized_params
    params[:vote][:answer_id] ||= params[:vote].delete(:answers)
    params.permit!
  end

end
